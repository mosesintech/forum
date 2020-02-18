import React from 'react';

function AddPost() {
    return (
        <span className='form'>
        <form>
            <label className='reply'>Add a New Reply</label>
            <textarea type='text' />
            <span className='buttons'>
                <button>Submit</button>
                <button>Preview</button>
            </span>
        </form>
        </span>
    );
}

export default AddPost;