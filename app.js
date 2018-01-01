//closures: an example using a simple job interview questions:

var job = function (name) {
    return function job_question(job_description) {
        if(job_description === 'developer'){
            console.log('do you know what are closures in javascript ' + name + '?');
        } else if (job_description === 'teacher'){
            console.log('what stem did you teach last time ' + name + '?');
        }

    }
}

var job_1 =  job('allan');
job_1('developer');

job('Mary')('teacher');
