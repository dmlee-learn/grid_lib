const gridData = [
    {
      name: 'Beautiful Lies',
      artist: 'Birdy',
      release: '2016-03-26',
      type: '1',
      genre: 'Pop'
    },
    {
      name: 'X',
      artist: 'Ed Sheeran',
      release: '2014.06.24',
      type: '1',
      genre: 'Pop',
      _attributes: {
        disabled: true // A current row is disabled
      }
    },
    {
      name: 'Moves Like Jagger',
      release: '2011.08.08',
      artist: 'Maroon5',
      type: '3',
      genre: 'Pop,Rock',
      _attributes: {
        checkDisabled: true // A checkbox is disabled only
      }
    },
    {
      name: 'A Head Full Of Dreams',
      artist: 'Coldplay',
      release: '2015.12.04',
      type: '1',
      genre: 'Rock',
      _attributes: {
        checked: true, // A checkbox is already checked while rendering
        className: {
          // Add class name on a row
          row: ['red']
        }
      }
    },
    {
      name: '19',
      artist: 'Adele',
      release: '2008.01.27',
      type: '2',
      genre: 'Pop,R&B',
      _attributes: {
        rowSpan: {
          // Merge rows
          artist: 3,
          genre: 2
        }
      }
    },
    {
      name: '21',
      artist: 'Adele',
      release: '2011.01.21',
      type: '1',
      genre: 'Pop,R&B'
    },
    {
      name: '25',
      artist: 'Adele',
      release: '2015.11.20',
      type: '2',
      genre: 'Pop',
      _attributes: {
        className: {
          // Add class name on each columns
          column: {
            type: ['blue'],
            genre: ['blue']
          }
        }
      }
    }
  ];

  export default gridData;