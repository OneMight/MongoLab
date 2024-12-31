const Group = require('../models/Group')
const groupController = require('./GroupController')

jest.mock('../models/Group', () => ({
    create: jest.fn()
}));

let req;
let res;

beforeEach(() =>{
    req ={
        body:{
            
            groupName: 'test group name'
        }
    };
    res = {
        status: jest.fn(() => res),
        json: jest.fn()
    };
});

test('creating group',  async () => {
    const expectGroup ={
        groupName: 'test group name'
    };
    jest.clearAllMocks();
    // jest.spyOn(Group,'create').mockResolvedValue(expectGroup)
    Group.create.mockResolvedValue(expectGroup);

    await groupController.createGroup(req,res);

    expect(res.json).toHaveBeenCalledWith(expectGroup);
 })