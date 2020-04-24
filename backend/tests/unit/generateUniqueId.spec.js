const generateUniqueId = require('../../src/utils/generateUniqueId');//começamos importando a funçao

describe('Generate Unique ID', () => {
    it('should generate an unique ID', ()=> {//it = isto
       const id = generateUniqueId();

       expect(id).toHaveLength(8);
    });
});