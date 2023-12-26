import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };

    // console.log('constructor');
  }

  componentDidMount() {
    // console.log('mounted');
  }

  render() {
    // console.log('rendered');
    return (
      <div className='container-max py-16  text-center min-h-[80vh]'>
        <img
          src='https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnQlMjBkZWxpdmVyeXxlbnwwfHwwfHx8MA%3D%3D'
          alt=''
          className='w-full max-w-[480px] mx-auto rounded-lg'
        />

        <div className='w-[90%] max-w-[480px] mx-auto'>
          <h1 className='text-3xl my-4'>Delicious Drop 🍕</h1>

          <p>
          Delicious Drop is a food ordering web application built with React.js ⚛ and
            Swiggy's API.
          </p>
          <p>
            This project was built 🔧 during the coursework of{' '}
            <a
              className='text-orange-600'
              href='https://namastedev.com/namaste-react/'
            >
              Namaste React
            </a>{' '}
            taught by{' '}
            <a
              className='text-orange-600'
              href='https://www.linkedin.com/in/akshaymarch7/'
            >
              Akshay Saini
            </a>
          </p>

          <p>count1 : {this.state.count}</p>
          <p>count2 : {this.state.count2}</p>
          <button
            className='border my-2 bg-gray-50 p-2 px-4 rounded-md'
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            click me
          </button>
        </div>
      </div>
    );
  }
}

export default About;
