import React from "react";

const RenderElementsRecursively = (item) => {
  if(item && item.constructor === Array && item.length > 0) {
    // The Array elements are type Object
    if(item[0].constructor === Object) {
      let objectKeys = Object.keys(item[0]);
      let headingRow, contentRows;

      headingRow = objectKeys.reduce((result, key, index) => {
        if(key !== 'id' && key !== 'rewards') {
          result.push( <th key={index}>{ key }</th> );
        }
        return result;
      }, []);
      contentRows = item.map((obj, index) => {
        return(
          <tr key={index}>
            { objectKeys.reduce((result, key, index) => {
              if(key !== 'id' && key !== 'rewards') {
                result.push(
                  <td key={index}>{ RenderElementsRecursively(obj[key]) }</td>
                )
              }
              return result;
            }, [])}
          </tr>
        )
      });

      return (
        <table className="data-table">
          <tbody>
            <tr>{ headingRow }</tr>
            { contentRows }
          </tbody>
        </table>
      )
    }
    // Array elements are not objects
    else {
      return (
        <tr>
          {item.map((key, index) => {
            return (
              <td key={index}>
                { RenderElementsRecursively(key) }
              </td>
            )
          })}
        </tr>
      )
    }
  } 
  else if (item && item.constructor === Object) {
    let objectKeys = Object.keys(item);
    return (
      <table>
        <tbody>
          {objectKeys.reduce((result, key, index) => {
            if(key !== 'id' && key !== 'rewards') {
              result.push(
                <tr key={index}>
                  <th>{ key }</th>
                  <td>{ RenderElementsRecursively(item[key]) }</td>
                </tr>
              )
            }
            return result;
          }, [])}
        </tbody>
      </table>
    )
  }
  else {
    return item ? item : 'N/A';
  }
};

export default RenderElementsRecursively;
