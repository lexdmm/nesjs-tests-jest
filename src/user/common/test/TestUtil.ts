import { User } from '../../user.entity'

export default class TestUtil {
    static getValidUser(): User {
        const user = new User()
        user.id = '1'
        user.email = 'email_test@test.com'
        user.name = 'Email Test'

        return user
    }
}
