import React from 'react'
import AkRating from '../ak-components/AkRating'

function Projects(props) {
  const SkillRating = (props) => {
    return (
      <div className="flex justify-center items-center py-2">
        <div className="row pr-2">
          {props.skillIcon}
          {props.skillName}
        </div>
        <AkRating name="read-only" value={props.skillValue} color="#EF4444" />
      </div>
    )
  }
  return (
    <div className="text-center pb-5" id="skill">
      <div className="text-4xl font-bold text-center block-header">Skills</div>
      <div className="mx-auto rounded-xl overflow-hidden ">
        <div className="md:flex justify-center align-items-center">
          <div className="p-8">
            <div className="text-xl font-bold">Frameworks</div>

            <SkillRating
              skillName={'React'}
              skillValue={4}
              skillIcon={<i className="fab fa-react text-2xl mr-1"></i>}
            />
            <SkillRating
              skillName={'Vue'}
              skillValue={4}
              skillIcon={<i className="fab fa-vuejs text-2xl mr-1"></i>}
            />
          </div>
          <div className="p-8">
            <div className="text-xl font-bold">Languages</div>
            <SkillRating
              skillName={'Java'}
              skillValue={3}
              skillIcon={<i className="fab fa-java text-2xl mr-2"></i>}
            />
            <SkillRating
              skillName={'Javascript'}
              skillValue={4}
              skillIcon={<i className="fab fa-js text-2xl mr-1"></i>}
            />
            <SkillRating
              skillName={'CSS'}
              skillValue={4}
              skillIcon={<i className="fab fa-css3-alt text-2xl mr-1"></i>}
            />
            <SkillRating
              skillName={'HTML'}
              skillValue={4}
              skillIcon={<i className="fab fa-html5 text-2xl mr-1"></i>}
            />
          </div>
          <div className="p-8">
            <div className="text-xl font-bold">Backend</div>
            <SkillRating
              skillName={'MongoDB'}
              skillValue={4}
              skillIcon={<i className="fas fa-database text-2xl mr-1"></i>}
            />
            <SkillRating
              skillName={'Node'}
              skillValue={4}
              skillIcon={<i className="fab fa-node-js text-2xl mr-1"></i>}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
