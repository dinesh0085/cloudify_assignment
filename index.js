document.getElementById("input_form").addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let desc = document.getElementById("description").value;
  let due = document.getElementById("due_date").value;
  let start = document.getElementById("start_date").value;
  let idList = "642a9d1f59ad26d266c36eb7";
  console.log(name, description, due_date, start_date);

  // Post request for adding card in to trello
  fetch(
    `https://api.trello.com/1/cards?key=cc388e05a328f45b3ebc22c156cdbbcb&token=ATTA8da333fb85a97e710a734f525d05bd690fc1b598cd030f02a6e719f0cd276c6dBA39D5E1`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, desc, due, start, idList }),
    }
  )
    .then((response) => {
      console.log(`Response: ${response.status} ${response.statusText}`);
      return response.text();
    })
    .then((text) => {
      document.getElementById("name").value="",
      document.getElementById("description").value="",
      document.getElementById("due_date").value="",
      document.getElementById("start_date").value=""
      console.log(text);
    })
    .catch((err) => console.error(err));
});
