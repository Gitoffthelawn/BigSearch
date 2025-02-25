const ajax = _ajax_ ; 
const keyword = _keyword_ ;

const before_start = 100;
var slow = 10;
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function start_go()
{
    if ( typeof(ajax) === "string" )
        await doInput(ajax, true);
    else if ( Array.isArray(ajax) )
    {
        for (var i=0; i<ajax.length; i++)
        {
            ajax_arr_ele = ajax[i];
            await sleep(slow * 10);
            if ( typeof(ajax_arr_ele) === "string" )
            {
                var web_element = document.querySelectorAll(ajax_arr_ele)[0];
                if ( web_element.tagName == "TEXTAREA" )
                {
                    await doInput(ajax_arr_ele, i==ajax.length-1);
                }
                else if ( web_element.tagName == "INPUT" )
                {
                    if ( web_element.getAttribute("type") === null ||
                        ["", "text", "search", "number", "tel", "email", "url", "password", "range", "date", "datetime-local", "time" , "week", "datetime", "hidden"]
                            .includes( web_element.getAttribute("type").toLowerCase() )
                    )
                    {
                        await doInput(ajax_arr_ele, i==ajax.length-1);
                    }
                    else if (web_element.getAttribute("type").toLowerCase() == "radio")
                    {
                        web_element.checked="checked";
                    }
                    else if (["submit", "button", "reset"]
                            .includes( web_element.getAttribute("type").toLowerCase() )
                    )
                    {
                        web_element.click();
                    }
                    // TODO checkbox image file
                }
                else if ( web_element.tagName == "BUTTON" )
                {
                    web_element.click();
                }
            }
            else if ( typeof(ajax_arr_ele) === "number" )
            {
                await sleep(ajax_arr_ele);
            }
        }
    }
}
async function doInput(queryStr, pressEnter=true) 
{
    
    var web_inputbox;
    
    await sleep(slow * 5);
    web_inputbox = document.querySelectorAll(queryStr)[0];
    web_inputbox.focus();
    
    
    await sleep(slow * 2);
    web_inputbox = document.querySelectorAll(queryStr)[0];
    web_inputbox.dispatchEvent ( new Event( "input", { bubbles:true } ) );
    
    await sleep(slow * 2);
    web_inputbox = document.querySelectorAll(queryStr)[0];
    web_inputbox.dispatchEvent ( new Event( "change", { bubbles:true } ) );
    
    await sleep(slow * 5);
    web_inputbox = document.querySelectorAll(queryStr)[0];
    web_inputbox.value = keyword ;
    
    await sleep(slow * 2);
    web_inputbox = document.querySelectorAll(queryStr)[0];
    web_inputbox.dispatchEvent ( new Event( "input", { bubbles:true } ) );
    
    await sleep(slow * 2);
    web_inputbox = document.querySelectorAll(queryStr)[0];
    web_inputbox.dispatchEvent ( new Event( "change", { bubbles:true } ) );
    
    if (pressEnter) 
    {
        await sleep(slow * 5);
        web_inputbox = document.querySelectorAll(queryStr)[0];
        web_inputbox.dispatchEvent ( new KeyboardEvent( "keypress", { key: "Enter", keyCode: 13, bubbles: true } ) );
        
        await sleep(slow * 5);
        web_inputbox = document.querySelectorAll(queryStr)[0];
        web_inputbox.dispatchEvent ( new KeyboardEvent( "keydown", { key: "Enter", keyCode: 13, bubbles: true } ) );
        
        await sleep(slow * 1);
        web_inputbox = document.querySelectorAll(queryStr)[0];
        web_inputbox.dispatchEvent ( new KeyboardEvent( "keyup", { key: "Enter", keyCode: 13, bubbles: true } ) );
    }
}

setTimeout(start_go, before_start);
