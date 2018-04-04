//This is an example of a model in Angular 5
export class User
{
	//Here you can add many attributes as your model has
	public username: string


	// Here you can pass many parameters to initialize your attributes as you want
	constructor( username )
	{
		this.username = username
	}


}