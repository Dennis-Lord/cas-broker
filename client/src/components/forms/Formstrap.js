import './formstrap.css'

// header label of form
function HeaderLabel({label, id}) {
    return (
    <div className='div'>
        <label id={id} className='block text-l font-medium text-gray-700'>{label}</label>
    </div>)
}

function InputStrap({text, type, name}) {
    const val = text;
    const inputType = type;
    const inputName = name;

    if (inputType === 'text' || inputType === 'number') {
        return <div className='c-div'>
            <input name={name} className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-600 focus:ring-teal-600 sm:text-sm' type={inputType}/>
        </div>
    }else if (inputType === 'date') {
        return <input name={inputName} className="w-30 h-10 rounded-md border-gray-300 shadow-sm focus:border-teal-600 focus:ring-teal-600 sm:text-sm" type="date"/>
    }else {
    return(
            <div className='c-div s'>
                {
                type === 'checkbox'? 
                <>
                <input name={inputName} value={val} className='h-5 w-5 rounded border-gray-300 text-teal-600 focus:ring-teal-600' type={inputType}/>
                <span className='ml-2 font-normal text-gray-700'>{val}</span>
                </>
                :
                <>
                <input value={val} name={inputName} className='h-5 w-5 rounded border-gray-300 text-teal-600 focus:ring-teal-600' type={inputType}/>
                <span className='ml-2 font-normal text-gray-700'>{val}</span>
                </>} 
            </div>
    )
}
}


// select and options 
function OptionStrap({options, name}) {
    const opt = options;
    const n = name;
    return(
        <div>
              <select name={n} className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-teal-600 focus:outline-none focus:ring-teal-600 sm:text-sm' defaultValue={'Choose your option'}>
                {
                    opt.map((option, i) => <option key={i}>{option}</option>)
                }
              </select>
            </div>
    )
}



export {HeaderLabel, InputStrap, OptionStrap};