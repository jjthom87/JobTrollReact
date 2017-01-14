import expect from 'expect';
import * as actions from './../../actions/indexes/create_account_index';
import * as types from './../../actions/types/create_account_types';

describe('Create Account Actions', ()=>{
	it('should generate create account action', () => {
		const newUser = {
			type: types.CREATE_USER,
			name: 'joeyjoey',
			username: 'johnnyjohn',
			password: 'aaaaaaaa',
			confirmPassword: 'aaaaaaaa'
		};
		const res = actions.createAccountForm(
			newUser.name, 
			newUser.username, 
			newUser.password, 
			newUser.confirmPassword);

		expect(res).toEqual(newUser);
	});
});