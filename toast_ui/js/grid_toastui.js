"use strict";
import CheckboxRenderer from './components/CheckboxRenderer.js'; // or './module'
import RowNumberRenderer from './components/RowNumberRenderer.js';
import ImageRenderer from './components/ImageRenderer.js';
import gridData from './data/data.js';

  const dataSource = {
	api: {
	  readData: { url: '/api/readData', method: 'GET' },
	  createData: { url: '/api/createData', method: 'POST' },
	  updateData: { url: '/api/updateData', method: 'PUT' },
	  modifyData: { url: '/api/modifyData', method: 'PUT' },
	  deleteData: { url: '/api/deleteData', method: 'DELETE' }
	}
  };

  const grid = new tui.Grid({
    el: document.getElementById('grid'),
    data: gridData,
    scrollX: false,
    scrollY: false,
	rowHeaders: [
	{
	  type: 'rowNum',
	  renderer: {
		type: RowNumberRenderer
	  }
	},
	{
	  type: 'checkbox',
	  header: `
	  <label for="all-checkbox" class="checkbox">
		<input type="checkbox" id="all-checkbox" class="hidden-input" name="_checked" />
		<span class="custom-input"></span>
	  </label>
	`,
	  renderer: {
		type: CheckboxRenderer
	  }
	}
  ],
    columns: [
      {
        header: 'Name',
        name: 'name'
      },
      {
        header: 'Artist',
        name: 'artist'
      },
      {
        header: 'Type',
        name: 'type',
        formatter: 'listItemText',
          editor: {
            type: 'select',
            options: {
              listItems: [
                { text: 'Deluxe', value: '1' },
                { text: 'EP', value: '2' },
                { text: 'Single', value: '3' }
              ]
            }
          }
      },
      {
        header: 'Release',
        name: 'release',
        editor: 'datePicker'
      },
      {
        header: 'Genre',
        name: 'genre'
      }
    ]
  });