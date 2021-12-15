import { InternalServerErrorException } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import TestUtil from './common/test/TestUtil'
import { User } from './user.entity'
import { UserService } from './user.service'

describe('UserService', () => {
    const mockRepository = {
        find: jest.fn(),
        findOne: jest.fn(),
        create: jest.fn(),
        save: jest.fn(),
        update: jest.fn(),
        delete: jest.fn()
    }

    let service: UserService

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                {
                    provide: getRepositoryToken(User),
                    useValue: mockRepository
                }
            ]
        }).compile()

        service = module.get<UserService>(UserService)
    })

    // Clear all mocks
    beforeEach(() => {
        mockRepository.find.mockReset()
        mockRepository.findOne.mockReset()
        mockRepository.create.mockReset()
        mockRepository.save.mockReset()
        mockRepository.update.mockReset()
        mockRepository.delete.mockReset()
    })

    describe('findAllUsers', () => {
        it('should be list all users', async () => {
            const user = TestUtil.getValidUser()
            mockRepository.find.mockReturnValue([user, user])
            const users = await service.findAllUsers()

            expect(users).toHaveLength(2)
            expect(mockRepository.find).toHaveBeenCalledTimes(1)
        })
    })

    describe('findUserById', () => {
        it('should be get a specific user', async () => {
            const user = TestUtil.getValidUser()
            mockRepository.findOne.mockReturnValue(user)
            const userById = await service.findUserById('1')

            expect(userById).toMatchObject({
                id: user.id,
                name: user.name,
                email: user.email
            })
            expect(mockRepository.findOne).toHaveBeenCalledTimes(1)
        })

        it('should return axception when does not find a user', async () => {
            TestUtil.getValidUser()
            mockRepository.findOne.mockReturnValue(null)
            //Without await because the return exception
            const userById = service.findUserById('3')

            expect(userById).rejects.toThrow(InternalServerErrorException)
            expect(mockRepository.findOne).toHaveBeenCalledTimes(1)
        })
    })

    describe('createUser', () => {
        it('should return when create a new user', async () => {
            const user = TestUtil.getValidUser()
            mockRepository.save.mockReturnValue(user)
            mockRepository.create.mockReturnValue(user)
            const saveUser = await service.createUser(user)

            expect(saveUser).toMatchObject(user)
            expect(mockRepository.create).toHaveBeenCalledTimes(1)
            expect(mockRepository.save).toHaveBeenCalledTimes(1)
        })

        it('should return axception when does not save a user', async () => {
            const user = TestUtil.getValidUser()
            mockRepository.save.mockReturnValue(null)
            mockRepository.create.mockReturnValue(null)

            await service.createUser(user).catch((err) => {
                expect(err).toBeInstanceOf(InternalServerErrorException)
                expect(err).toMatchObject({
                    message: 'There was an error creating the user. Try again.'
                })
            })

            expect(mockRepository.create).toHaveBeenCalledTimes(1)
            expect(mockRepository.save).toHaveBeenCalledTimes(1)
        })
    })
})
