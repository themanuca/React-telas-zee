import React from 'react'

export default props => (
    <div>    
        <br/>
        <br/>
        <br/>
            <footer className='main-footer hidden-xs'>
            
            <strong>
                Copyright &copy; {1900 + new Date().getYear()}
                <a href='https://github.com/jhonnyjks/react-restful-client' rel="noopener noreferrer" target='_blank'>
                    {process.env.REACT_ORGANIZATION}
                </a>.
            </strong>
        </footer>
    </div>

)