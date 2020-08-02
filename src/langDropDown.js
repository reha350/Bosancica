import React from 'react';
import "./lang.css";

function langDropDown() {
  return (
    <div>
        <nav>
            <div class="lang-menu">
                <div class="selected-lang">
                    English
                </div>
                <ul>
                    <li>
                        <a href="#" class="de">Deutsch</a>
                    </li>
                    <li>
                        <a href="" class="ba">Bosanski</a>
                    </li>
                    <li>
                        <a href="" class="en">English</a>
                    </li>
                    <li>
                        <a href="" class="tr">Türkçe</a>
                    </li>
                </ul>
                
            </div> 
            </nav>   
    </div>
  );
}

export default langDropDown;
