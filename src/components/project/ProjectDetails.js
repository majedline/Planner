import React from 'react'

const ProjectDetails = (props) => {

    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">({id}) Project Title </span>
                    <p> orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor, nunc a pellentesque tristique, sem nisi gravida urna, sit amet porttitor arcu enim vel est. Cras rutrum nisl est, nec congue est tempus vitae. Proin a convallis massa. Vestibulum neque justo, mattis non lobortis et, suscipit a dui. Integer ac est a justo viverra volutpat. Donec quis lorem feugiat, cursus quam quis, dignissim magna. Suspendisse nec est vitae augue semper iaculis at ac justo. Sed porta dui metus, vitae gravida magna vehicula vitae. Etiam faucibus accumsan sapien sed vulputate. Sed lobortis mollis erat, vitae ornare libero sodales nec. Phasellus in aliquam augue. Donec sit amet pretium justo. Pellentesque tempor orci urna, in luctus magna lobortis at. Morbi massa enim, rutrum nec luctus ut, dignissim in nisi. Fusce interdum commodo velit, nec laoreet metus fringilla ut. </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Jim Bob</div>
                    <div> 2nd september 2020</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails