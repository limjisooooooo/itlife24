import './CheckUp.css';
import * as React from 'react'
import CheckImg from './CheckImg';
import Radio from './Radio';
const CheckUp = () => {
    const osCheckSeries = React.useRef([{'value':'authentic', 'text': '정품'}, {'value':'inauthentic', 'text': '비정품'}]);
    const functionCheckSeries = React.useRef([{'value':'clean', 'text':'○'}, {'value': 'normal', 'text': '△'}, {'value': 'fault', 'text':'X'}])    
    return (        
        <div className="page">
            <div className='header'>
                <div className='daterow'>                    
                    <div className='logo'></div>
                    <input type="date" className='text-Area'/>
                </div>
                <div className='titleRow'>
                    <div className='title'>
                        <h1>전자제품 성능 · 점검 기록부</h1>                
                    </div>
                    <div className='clientInfo'>
                        <table>
                            <colgroup>
                                <col width={'40%'}/>
                                <col width={'*'}/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <td colSpan={2}>고객정보</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>고객성함</td>
                                    <td><input type="text" className='text-Area' spellCheck={false}/></td>
                                </tr>
                                <tr>
                                    <td>연락처</td>
                                    <td><input type="tel" className='text-Area'/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <table>
                <colgroup>
                    <col width={'6%'}/>
                    <col width={'19%'}/>
                    <col width={'8%'}/>
                    <col width={'12%'}/>
                    <col width={'8%'}/>
                    <col width={'17%'}/>
                    <col width={'8%'}/>
                    <col width={'22%'}/>
                </colgroup>
                <thead>
                    <tr>
                        <td colSpan={8}>제품 기본정보</td>                   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>제조사</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                        <td>제조년월</td>
                        <td><input type="month" className='text-Area' spellCheck={false}/></td>
                        <td>일련번호</td>
                        <td colSpan={3}><input type="text" className='text-Area' spellCheck={false}/></td>
                    </tr>
                    <tr>
                        <td>모델명</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                        <td>구입연월</td>
                        <td><input type="month" className='text-Area' spellCheck={false}/></td>
                        <td>제조사보증</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                        <td>비밀번호</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>   
                    </tr>
                </tbody>
            </table>
            <table>
                <colgroup>
                    <col width={'8%'}/>
                    <col width={'17%'}/>
                    <col width={'6%'}/>
                    <col width={'14%'}/>
                    <col width={'8%'}/>
                    <col width={'20%'}/>
                    <col width={'10%'}/>
                    <col width={'17%'}/>
                </colgroup>
                <thead>
                    <tr>
                        <td colSpan={8}>사양</td>                   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CPU</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                        <td>RAM</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                        <td>GPU</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                        <td>디스플레이</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>                        
                    </tr>
                    <tr>
                        <td>저장장치</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                        <td>OS</td>
                        <td>
                            <Radio name="os" radios={osCheckSeries.current} />
                        </td>
                        <td>업그레이드 내역</td>
                        <td colSpan={3}><textarea className='text-Area' spellCheck={false}/></td>   
                    </tr>
                </tbody>
            </table>            
            <table>
                <colgroup>
                    <col width={'8%'}/>
                    <col width={'10%'}/>
                    <col width={'8%'}/>
                    <col width={'10%'}/>
                    <col width={'8%'}/>
                    <col width={'10%'}/>
                    <col width={'10%'}/>
                    <col width={'16%'}/>
                </colgroup>
                <thead>
                    <tr>
                        <td colSpan={8}>작동상태</td>                   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>무선통신</td>
                        <td><Radio name="wireless" radios={functionCheckSeries.current} /></td>
                        <td>키보드</td>
                        <td><Radio name="keyboard" radios={functionCheckSeries.current} /></td>
                        <td rowSpan={2}>모니터</td>
                        <td colSpan={3} rowSpan={2}><textarea className='text-Area' spellCheck={false}/></td>
                    </tr>
                    <tr>
                        <td>전원</td>
                        <td><Radio name="power" radios={functionCheckSeries.current} /></td>
                        <td>스피커</td>
                        <td><Radio name="speaker" radios={functionCheckSeries.current} /></td>
                    </tr>                    
                    <tr>
                        <td>지문인식</td>
                        <td><Radio name="fingerprint" radios={functionCheckSeries.current} /></td>
                        <td>카메라</td>
                        <td><Radio name="camera" radios={functionCheckSeries.current} /></td>
                        <td rowSpan={2}>배터리</td>
                        <td>설계용량</td>
                        <td>최대충전용량</td>
                        <td>사이클/웨어율</td>
                    </tr>
                    <tr>
                        <td>포트</td>
                        <td><Radio name="port" radios={functionCheckSeries.current} /></td>
                        <td>터치패드</td>
                        <td><Radio name="touchpad" radios={functionCheckSeries.current} /></td>                        
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                    </tr>                    
                    <tr>
                        <td colSpan={2}>특이사항</td>
                        <td colSpan={6}><input type="text" className='text-Area' spellCheck={false}/></td>
                    </tr>
                </tbody>
            </table>                       
            <CheckImg />            
            <table>
                <colgroup>
                    <col width={'10%'}/>
                    <col width={'15%'}/>
                    <col width={'10%'}/>
                    <col width={'15%'}/>
                    <col width={'10%'}/>
                    <col width={'40%'}/>
                </colgroup>
                <thead>
                    <tr>
                        <td colSpan={6}>외관 및 구성품</td>                   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>상판</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                        <td>하판</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                        <td>구성품내역</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>                        
                    </tr>
                    <tr>
                        <td>액정</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                        <td>사이드</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                        <td>누락된 구성품</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>                        
                    </tr>
                    <tr>
                        <td>탑케이스</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                        <td>외관등급</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                        <td>특이사항</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>                        
                    </tr>
                </tbody>
            </table>             
            <table>
                <colgroup>
                    <col width={'15%'}/>
                    <col width={'35%'}/>
                    <col width={'10%'}/>
                    <col width={'40%'}/>                    
                </colgroup>
                <thead>
                    <tr>
                        <td colSpan={4}>종합정보</td>                   
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>하자항목</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                        <td>수리필요항목</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                    </tr>
                    <tr>
                        <td>구성품 추가 필요 항목</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>
                        <td>등급</td>
                        <td><input type="text" className='text-Area' spellCheck={false}/></td>                     
                    </tr>
                    <tr>
                        <td>검수자 의견</td>
                        <td colSpan={3}><input type="text" className='text-Area' spellCheck={false}/></td>   
                    </tr>
                </tbody>
            </table>            
        </div>
    )
}
export default CheckUp