export default class Pagination {
  rende() {
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
          onClick={this.props.handleClick}
        >
          {number}
        </li>
      );
    });
    return (
      <table>
        <tbody>{renderData}</tbody>
        <div>
          <ul id="page-numbers">{renderPageNumbers}</ul>
        </div>
      </table>
    );
  }
}

///data
{
  this.props.myData.map(function(myDataItem, index) {
    return (
      <tr key={index}>
        <td colSpan="2">{myDataItem.sentence}</td>
        <td>{myDataItem.emotion}</td>
      </tr>
    );
  });
}
