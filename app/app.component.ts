import { Component }	from '@angular/core';

import { List }			from './list/list';

@Component({
    selector:		'list-of-things',
    templateUrl:	'/app/app.template.html'
})
export class AppComponent {
	lists = [
	new List(0, 'Test'),
	new List(3, 'Coucou')
	];
}