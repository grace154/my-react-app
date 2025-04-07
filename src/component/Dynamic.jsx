import React, { useState, useEffect } from "react";
import "../App.css";

const Dynamic = () => {
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState([]);

    const addItem = () => {
        if (inputValue.trim() ) {
            setItems(previtems=>[...previtems, inputValue]);
            setInputValue('');
            
        }
        const itemDelete = (index) => {
            setItems(prev => prev.filter((_, i) => i !== index));
          };
        
    };
    return (
      <div className="list-container">
          <div className="list-card">
              <h2 className="list-title">Dynamic List Manager</h2>
              <div className="input-container">
                  <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Enter an item"
                      className="list-input"
                    
                  />
                  <button onClick={addItem} className="list-button">Add Item</button>
              </div>
              <div className="list-dynamic">
                  {items.length ===0 ? (
                        <p>No Activity added</p>
                    ) : (
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                              </ul>
                          )}
                      </div>
                  </div>
              </div>
          );
      };
      
      export default Dynamic;

