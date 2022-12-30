import './formstrap.css'


function HeaderLabel({label, name}) {
    return (
    <div className='div'>
        <label id={name} name={name} className='label-text'>{label}</label>
    </div>)
}

function CheckboxStrap({text, type, name}) {
    if (type === 'text' || type === 'number') {
        return <div className='c-div'>
            <input id={name} name={name} className='input-t' type={type}/>
        </div>
    }else {
    return(
            <div className='c-div s'>
                <input id={name} name={name} className='input-c' type={type}/>
                <span className='span-text'>{text}</span>
            </div>
    )
}
}

function OptionStrap({options, name}) {
    const opt = options;
    return(
        <div>
              <select id={name} className='select-o' defaultValue={'Choose your option'}>
                {
                    opt.map((option, i) => <option key={i} value={option}>{option}</option>)
                }
              </select>
            </div>
    )
}



export {HeaderLabel, CheckboxStrap, OptionStrap};