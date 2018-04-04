

import { Injectable } from '@angular/core'
import axios from 'axios'
import { User } from '../Models/User.model'
import { base } from './base'

@Injectable()
export class UserService 
{

  index ( token: string )
  {
  	let headers = { 'Content-Type': 'application/json', 'Authorization': token }

	let http = axios.create({ baseURL: base.api, timeout: 1000, headers: headers });

	return http.get( 'users' ).catch( error => console.log( error.response ) )
  }



  store ( user: User, token: string )
  {
  	let headers = { 'Content-Type': 'application/json', 'Authorization': token }

	let http = axios.create({ baseURL: base.api, timeout: 1000, headers: headers });

	return http.post( 'users', user ).catch( error => console.log( error.response ) )
  }



  show ( id: string, token: string )
  {
  	let headers = { 'Content-Type': 'application/json', 'Authorization': token }

	let http = axios.create({ baseURL: base.api, timeout: 1000, headers: headers });

	return http.get( 'users/'+id ).catch( error => console.log( error.response ) )
  }


  update ( user: any, id: string, token: string )
  {
  	let headers = { 'Content-Type': 'application/json', 'Authorization': token }

	let http = axios.create({ baseURL: base.api, timeout: 1000, headers: headers });

	return http.put( 'users/'+id, user ).catch( error => console.log( error.response ) )
  }


  delete ( id: string, token: string )
  {
  	let headers = { 'Content-Type': 'application/json', 'Authorization': token }

	let http = axios.create({ baseURL: base.api, timeout: 1000, headers: headers });

	return http.delete( 'users/'+id ).catch( error => console.log( error.response ) )
  }

}
