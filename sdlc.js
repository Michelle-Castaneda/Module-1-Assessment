// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/
// 1. Planning
// 2. Analysis of Requirements
// 3. Design
// 4. Implementation
// 5. Testing & Integration
// 6. Maintain


//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/

const planning = "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added.";
const Analysis = "The software requirements are systematically collected, while considering the preferences and specifications of the clients. The requirements are comprehensively delineated, including the specific operating system requirements. Effective communication and collaboration with clients play a pivotal role in accurately defining the desired functionalities or constrains" ;
const Design = "Involves transforming the requirements into a blueprint for the software system. The overall structure and components of the system are defined in detail, specifying each component that will be implemented. ";
const Implementation = "The coding of the software begins according to the design specifications.The design will be translated into executable code.";
const Testing = "The implemented software will execute inputs in order to verify results, to identify any defects and fix any issues and ensure that if works correctly and meets the requirements";
const Maintain = "This step is an ongoing support once the software is deployed, it consist on fixing bugs, implementing new features or making changes according to new tecnology, feedback or client's desire";

console.log(planning, Maintain, Design, Implementation, Testing, Maintain);