function Goal(title, status = 'TODO') {
	this.title = title;
	this.status = status;
}

var goals = []

function createGoal() {
	var title = document.getElementById("new-goal-title-input").value;
	var goal = new Goal(title);
	goals.push(goal);
	updateGoals();
	document.getElementById("new-goal-title-input").value = '';
}

window.onload = function() {
	document.getElementById("new-goal-title-input").value = '';
	document.getElementById("new-goal-btn").addEventListener("click", createGoal);
	document.getElementById("new-goal-title-input").addEventListener("keypress", function(e) {
		if (e.key === 'Enter') {
			createGoal();
		}
	});
}

function updateGoals() {
		var goalsSection = document.getElementById("goals");
		var goalsEnd = document.getElementById("goals-end");
		goalsSection.insertBefore(goalToHTML(), goalsEnd);
}

function goalToHTML() {
	var goal = goals[goals.length-1];

	var goalDiv = document.createElement("div");
	goalDiv.className = 'goal';
	
	var goalHeaderContainer = document.createElement("div");
	goalHeaderContainer.className = 'goalHeaderContainer';
	goalHeaderContainer.addEventListener("click", function() { changeStatus(goal) });
	
	var goalHeader = document.createElement("span");

	var goalTitleContent = document.createTextNode(goal.title);
	
	goalHeader.appendChild(goalTitleContent);
	goalHeaderContainer.appendChild(goalHeader);
	goalDiv.appendChild(goalHeaderContainer);


	return goalDiv;
}

function changeStatus(goal) {
	if (goal.status === 'TODO') {
		goal.status = 'DONE';
		event.target.style.textDecoration = 'line-through';
	} else if (goal.status === 'DONE') {
		goal.status = 'TODO';
		event.target.style.textDecoration = 'none';
	} else {
		alert('Unknown Goal status!');
	}
}