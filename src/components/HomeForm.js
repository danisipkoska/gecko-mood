import React from "react";

class HomeForm extends React.Component {
  render() {
    const { myData, page, pageLimit } = this.props;
    const indexOfLastData = page * pageLimit;
    const indexOfFirstData = indexOfLastData - pageLimit;
    const currentData = myData.slice(indexOfFirstData, indexOfLastData);

    const renderData = currentData.map((data, index) => {
      return (
        <tr key={index}>
          <td colSpan="2">{data.sentence}</td>
          <td>{data.emotion}</td>
        </tr>
      );
    });

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(myData.length / pageLimit); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className="number"
          key={number}
          id={number}
          onClick={this.props.onClick}
        >
          {number}
        </li>
      );
    });
    return (
      <div className="container-fluid homeForm ">
        <form className=" customContainer  pt-10 ">
          <h1 className="text-success text-center p-4">Gecko-Mood</h1>
          <input
            className="form-control  myForm"
            name="input"
            placeholder="Enter the sentence..."
            value={this.props.input}
            onChange={this.props.handleChangeInput}
          />
          <br />
          <select
            className="form-control myForm"
            name="select"
            onChange={this.props.handleChangeSelect}
            value={this.props.select}
          >
            <option> </option>
            <option>Happy</option>
            <option>Sad</option>
            <option>Angry</option>
          </select>
          <br />

          <button
            className="btn btn-success float-right"
            onClick={this.props.handleLocalStorage}
          >
            Submit
          </button>
          <br />
          <br />
        </form>
        <div className=" float-right tableDiv">
          <table className="table  mytable ">
            <thead>
              <tr>
                <th colSpan="2">List of our sentences</th>
                <th scope="col">Emotions</th>
              </tr>
            </thead>
            <tbody>{renderData}</tbody>
          </table>
          <br />
          <ul id="page-numbers">{renderPageNumbers}</ul>
          <br />
          <div className="trainButtonDiv">
            <button
              className="btn btn-success float-right"
              onClick={this.props.train}
            >
              Train
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeForm;
