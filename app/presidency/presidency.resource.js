(function(){
	'use strict';

	angular.module('presidency')
	.factory('presidencyResource', presidencyResource);

	presidencyResource.$inject = [];

	function presidencyResource() {

		var presidents = [
			{
				id: 0,
				name:'Presidente 1',
				lastName:'Sobrenome 1',
				city:'Cidade 1',
				state:'Estado 1'
			},
			{	
				id: 1,
				name:'Presidente 2',
				lastName:'Sobrenome 2',
				city:'Cidade 2',
				state:'Estado 2'
			},
			{
				id: 2,
				name:'Presidente 3',
				lastName:'Sobrenome 3',
				city:'Cidade 3',
				state:'Estado 3'
			}
		];

		var service = {
			getPresidents: getPresidents
		};
		return service;
		/////

		function getPresidents() {
			return presidents;
		}
	}

})();