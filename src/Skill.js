import React , {Component} from 'react';
import StyledProgressbar from "./StyledProgressBar";

const langAndSkills = [
  {'name': 'C#', 'percentage': '89', 'styleClass': 'offset-1 col-md-2'},
  {'name': 'PHP', 'percentage': '70', 'styleClass': 'col-md-2'},
  {'name': 'JavaScript', 'percentage': '89', 'styleClass': 'col-md-2'},
  {'name': 'Java', 'percentage': '75', 'styleClass': 'col-md-2'},
  {'name': 'SQL', 'percentage': '90', 'styleClass': 'col-md-2'},
];

const frameworks = [
  {'name': 'ASP.NET', 'icon': <i className="icon-csharp"></i>},
  {'name': 'ADO.NET', 'icon': <i className="icon-csharp"></i>},
  {'name': 'Entity Framework', 'icon': <i className="icon-csharp"></i>},
  {'name':'ReactJs', 'icon': <i className="icon-reactjs"></i>},
  {'name':'Angular', 'icon': <i className="icon-angular"></i>},
  {'name':'Codeignitor', 'icon': <i className="icon-codeigniter"></i>},
  {'name': 'bootstrap', 'icon': <i className="icon-bootstrap"></i>},
];

export class Skill extends Component{

  render(){
    return(
      <div className="container text-center">
        <div className="card text-white bg-dark ">
          <div className="card-body">
            <h2>Technical Skills</h2>
            <hr/>
            <br/>
            <div className="row">
              {langAndSkills.map(lang =>
                <div key={lang.name} className={lang.styleClass}>
                  <StyledProgressbar initialAnimation={true} percentage={lang.percentage} text={`${lang.percentage}%`} />
                  <br/><br/>
                  <h3>{lang.name}</h3>
                </div>
              )}
            </div>
            <br/><br/>
            <div className="row">
              <div className="offset-3 col-md-6">
                <table className="table table-hover table-dark animated slideInUp">
                  <thead>
                  <tr >
                    <th colSpan="2" scope="col">Framework & Libraries</th>
                  </tr>
                  </thead>
                  <tbody>
                  {frameworks.map( fw =>
                    <tr key={fw.name}>
                      <td className="text-right">{fw.icon} &nbsp;</td>
                      <td className="text-center">{fw.name}</td>
                    </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
