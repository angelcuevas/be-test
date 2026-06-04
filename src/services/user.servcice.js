import * as usersMock from './../../mock/usersMock.json' with { type: 'json' };


class UserSertice {

    static getAllUsers(page=2, limit=5){
        const result = usersMock.default.slice((page-1)*limit, ((page-1)*limit)+limit)
        return result; 
    }

}

export default UserSertice;