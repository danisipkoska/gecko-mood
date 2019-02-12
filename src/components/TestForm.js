import React from "react";

function TestForm(props) {
  return (
    <div className="container-fluid homeFormTest">
      <form className="container customContainer col-6 pt-10 ">
        <h1 className="text-success text-center p-4">Check The Emotion</h1>

        <br />
        <input
          className="form-control  myForm"
          name="testInput"
          value={props.testInput}
          placeholder="Enter the sentence..."
          onChange={props.onChange}
        />
        <br />
        <br />
        <button
          className="btn btn-success float-right"
          type="submit"
          value="Submit"
          onClick={props.exec}
        >
          Check
        </button>
      </form>
    </div>
  );
}
export default TestForm;
