import React from 'react'
import { Collapse } from 'antd';

import 'antd/dist/antd.css';

const { Panel } = Collapse;


function Dropdown(props) {

	const {nudity, nudity_notes, violence, violence_notes, profanity, 
		profanity_notes, drugs, drugs_notes, intense, intense_notes} = props.data;

	
	

	let key;

	return(

		<Collapse accordion className="accordion" defaultActiveKey={['1']} >
			<Panel header="Sex and Nudity" open key="1" className="panel">

				<div class="numbers">
					<p><b>{nudity.none}</b> found none <span class="emoji">👨‍👩‍👦</span></p>
					<p><b>{nudity.mild}</b> found mild <span class="emoji">😀</span></p>
					<p><b>{nudity.moderate}</b> found moderate <span class="emoji">😳</span></p>
					<p><b>{nudity.severe}</b> found severe <span class="emoji">🙈</span></p>
					
				</div>
				<ul>
						{
							nudity_notes.map(note => <li>{note}</li>)
						}
					</ul>
			</Panel>
			<Panel header="Violence and Gore" key="2" className="panel">
				<div class="numbers">
					<p><b>{violence.none}</b> found none <span class="emoji">👨‍👩‍👦</span></p>
					<p><b>{violence.mild}</b> found mild <span class="emoji">😀</span></p>
					<p><b>{violence.moderate}</b> found moderate <span class="emoji">😳</span></p>
					<p><b>{violence.severe}</b> found severe <span class="emoji">🙈</span></p>
					
				</div>
				<ul>
						{
							violence_notes.map(note => <li>{note}</li>)
						}
					</ul>
			</Panel>
			<Panel header="Profanity" key="3" className="panel">
				<div class="numbers">
					<p><b>{profanity.none}</b> found none <span class="emoji">👨‍👩‍👦</span></p>
					<p><b>{profanity.mild}</b> found mild <span class="emoji">😀</span></p>
					<p><b>{profanity.moderate}</b> found moderate <span class="emoji">😳</span></p>
					<p><b>{profanity.severe}</b> found severe <span class="emoji">🙈</span></p>
					
				</div>
				<ul>
						{
							profanity_notes.map(note => <li>{note}</li>)
						}
					</ul>
			</Panel>
			<Panel header="Alcohol, Drugs and Smoking" key="4" className="panel">
				<div class="numbers">
					<p><b>{drugs.none}</b> found none <span class="emoji">👨‍👩‍👦</span></p>
					<p><b>{drugs.mild}</b>  found mild <span class="emoji">😀</span></p>
					<p><b>{drugs.moderate}</b>  found moderate <span class="emoji">😳</span></p>
					<p><b>{drugs.severe}</b>  found severe <span class="emoji">🙈</span></p>
					
				</div>
				<ul>
						{
							drugs_notes.map(note => <li>{note}</li>)
						}
					</ul>
			</Panel>
			<Panel header="Frightening and Intense Scenes" key="5" className="panel">
				<div class="numbers">
					<p><b>{intense.none}</b> found none <span class="emoji">👨‍👩‍👦</span></p>
					<p><b>{intense.mild}</b> found mild <span class="emoji">😀</span></p>
					<p><b>{intense.moderate}</b> found moderate <span class="emoji">😳</span></p>
					<p><b>{intense.severe}</b> found severe <span class="emoji">🙈</span></p>
					
				</div>
				<ul>
						{
							intense_notes.map(note => <li>{note}</li>)
						}
					</ul>
			</Panel>
		</Collapse>

	)
}

export default Dropdown

