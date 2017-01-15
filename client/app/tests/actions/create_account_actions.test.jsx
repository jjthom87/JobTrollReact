import expect from 'expect';
import * as actions from './../../actions/indexes/create_account_index';
import * as types from './../../actions/types/create_account_types';

describe('Create Account Actions', ()=>{
	it('should generate create account form action', () => {
		const newUser = [{
			name: 'joeyjoey',
			username: 'johnnyjohn',
			password: 'aaaaaaaa',
			confirmPassword: 'aaaaaaaa'
		}];
		const action = {
			type: types.CREATE_USER,
			newUser
		}
		const res = actions.createAccountForm(newUser);

		expect(res).toEqual(action);
	});
});