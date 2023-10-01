import React from 'react';

const CmpLoader = () => {
    return (
        <div className='loader-msg-content'>                
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default CmpLoader;