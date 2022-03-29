import './CheckUp.css';
import * as React from 'react'
import { setTextRange } from 'typescript';
import CheckImg from './CheckImg';

const CheckUp = () => {
    return (
        <div className="page">
            <table>
                <colgroup>
                    <col width={'5%'}/>
                    <col width={'20%'}/>
                    <col width={'5%'}/>
                    <col width={'10%'}/>
                    <col width={'5%'}/>
                    <col width={'15%'}/>
                    <col width={'5%'}/>
                    <col width={'20%'}/>
                </colgroup>
                <thead>
                    <tr>
                        <td colSpan={8}>제품 기본정보</td>                   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>제조사</td>
                        <td><input type="text" className='text-Area'/></td>
                        <td>제조년월</td>
                        <td><input type="month" className='text-Area'/></td>
                        <td>일련번호</td>
                        <td colSpan={3}><input type="text" className='text-Area'/></td>
                    </tr>
                    <tr>
                        <td>모델명</td>
                        <td><input type="text" className='text-Area'/></td>
                        <td>구입연월</td>
                        <td><input type="month" className='text-Area'/></td>
                        <td>제조사보증</td>
                        <td><input type="text" className='text-Area'/></td>
                        <td>비밀번호</td>
                        <td><input type="text" className='text-Area'/></td>   
                    </tr>
                </tbody>
            </table>
            <table>
                <colgroup>
                    <col width={'5%'}/>
                    <col width={'20%'}/>
                    <col width={'5%'}/>
                    <col width={'10%'}/>
                    <col width={'5%'}/>
                    <col width={'15%'}/>
                    <col width={'5%'}/>
                    <col width={'20%'}/>
                </colgroup>
                <thead>
                    <tr>
                        <td colSpan={8}>사양</td>                   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CPU</td>
                        <td><input type="text" className='text-Area'/></td>
                        <td>RAM</td>
                        <td><input type="text" className='text-Area'/></td>
                        <td>GPU</td>
                        <td><input type="text" className='text-Area'/></td>
                        <td>디스플레이</td>
                        <td><input type="text" className='text-Area'/></td>                        
                    </tr>
                    <tr>
                        <td>저장장치</td>
                        <td><input type="text" className='text-Area'/></td>
                        <td>OS</td>
                        <td><input type="text" className='text-Area'/></td>
                        <td>업그레이드 내역</td>
                        <td colSpan={3}><input type="text" className='text-Area'/></td>   
                    </tr>
                </tbody>
            </table>            
            <table>
                <colgroup>
                    <col width={'5%'}/>
                    <col width={'10%'}/>
                    <col width={'5%'}/>
                    <col width={'10%'}/>
                    <col width={'5%'}/>
                    <col width={'10%'}/>
                    <col width={'10%'}/>
                    <col width={'25%'}/>
                </colgroup>
                <thead>
                    <tr>
                        <td colSpan={8}>작동상태</td>                   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>무선통신</td>
                        <td><input type="text" className='text-Area'/></td>
                        <td>키보드</td>
                        <td><input type="text" className='text-Area'/></td>
                        <td rowSpan={2}>모니터</td>
                        <td colSpan={3} rowSpan={2}><input type="text" className='text-Area'/></td>
                    </tr>
                    <tr>
                        <td>전원</td>
                        <td><input type="text" className='text-Area'/></td>
                        <td>스피커</td>
                        <td><input type="text" className='text-Area'/></td>
                    </tr>                    
                    <tr>
                        <td>지문인식</td>
                        <td><input type="text" className='text-Area'/></td>
                        <td>카메라</td>
                        <td><input type="text" className='text-Area'/></td>
                        <td rowSpan={2}>배터리</td>
                        <td>설계용량</td>
                        <td>최대충전용량</td>
                        <td>사이클/웨어율</td>
                    </tr>
                    <tr>
                        <td>포트</td>
                        <td><input type="text" className='text-Area'/></td>
                        <td>터치패드</td>
                        <td><input type="text" className='text-Area'/></td>                        
                        <td><input type="text" className='text-Area'/></td>
                        <td><input type="text" className='text-Area'/></td>
                        <td><input type="text" className='text-Area'/></td>
                    </tr>                    
                </tbody>
            </table>            
            <CheckImg />            
        </div>
    )
}
export default CheckUp