import { Component } from "react";

class Student extends Component {
  constructor() {
    super();
    this.state = {
      name: "Kishore",
    };
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    console.log("Render called");

    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="mx-auto max-w-md rounded bg-white p-6 text-center shadow">
          <h1 className="mb-4 text-3xl font-bold text-gray-800">
            Class Component
          </h1>

          <h2 className="mb-6 text-xl text-gray-700">
            Name: {this.state.name}
          </h2>

          <button
            onClick={() => this.setState({ name: "Kishore Kumar" })}
            className="rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
          Change Name
          </button>
        </div>
      </div>
    );
  }
}

export default Student;
