import axios from 'axios';


class Users{
    static getAllUsers(){
        return axios.get('/users.json').then(response => response.data);
    }
}



jest.mock('axios');

it('should pass',()=>{

    const fakeUsers = [{"name":"abdel"},{"name":"ismail"},{"name":"ayoub"}];
    const response = {data:fakeUsers};
    axios.get.mockResolvedValue(response); // providing a mockResolverValue for get 
    const result = Users.getAllUsers();
    expect(result[0].name).toBe('abdel');

});
