import React from 'react';
import ImageLink from './userImageLink';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {data, index} = this.props;        
        return (
            <div className='tblRow'>
               <div className='tblData'>{index}</div>
               <div className='tblData'>
                    <ImageLink user={data.username} src={data.img} alt='user.jpg'/>
                    <a href={"https://www.freecodecamp.com/" + data.username} target='_blank'>{data.username}</a>
               </div>
               <div className='tblData'>{data.recent}</div>
               <div className='tblData'>{data.alltime}</div>
            </div>
            );
    }
}

export default TableRow;