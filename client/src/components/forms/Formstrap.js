import './formstrap.css'


function HeaderLabel({label, name}) {
    return (
    <div className='div'>
        <label name={name} className='label-text'>{label}</label>
    </div>)
}

function CheckboxStrap({text, type, name}) {
    if (type === 'text' || type === 'number') {
        return <div className='c-div'>
            <input className='input-t' type={type}/>
        </div>
    }else {
    return(
            <div className='c-div s'>
                <input name={name} className='input-c' type={type}/>
                <span className='span-text'>{text}</span>
            </div>
    )
}
}

function OptionStrap({options}) {
    const opt = options;
    return(
        <div>
              <select className='select-o'>
                <option value="" disabled selected>
                  Choose your option
                </option>
                {
                    opt.map((option) => <option value={option}>{option}</option>)
                }
              </select>
            </div>
    )
}



export {HeaderLabel, CheckboxStrap, OptionStrap};