let sum = 0;
window.onload = function ()
{
    init();
    let input = document.getElementsByClassName("pizza");
    for (let i = 0; i < input.length; i++)
    {
        input[i].addEventListener("change", start, false)
    }
}

function start(event)
{
    if (event.target.checked)
    {
        sum += parseInt(this.dataset.cost);
        let show = document.getElementById("price");
        show.innerHTML = sum;
    }
    else 
    {
        sum -= parseInt(this.dataset.cost);
        let show = document.getElementById("price");
        show.innerHTML = sum;
    }
}

function init()
{
    for (let i = 0; i < document.forms.length; i++)
            {
                let form = document.forms[i];
                let formvalidation = false;

                for (let j = 0; j < form.elements.length; j++)
                {
                    let e = form.elements[j];
                    
                    if (e.type != "text")
                    {
                        continue;
                    }
                    
                    let pattern = e.getAttribute("data-val");

                    if (pattern)
                    {
                        e.onchange = validateInput;
                        formvalidation = true;
                    }
                }

                if (formvalidation)
                {
                    form.onsubmit = validateform;
                }
            }
        }

        function validateInput()
        {
            let pattern = this.dataset.val,
                msg = this.dataset.valMsg, 
                msgId = this.dataset.valMsgId, 
                value = this.value;

            let res = value.search(pattern);
            if (res == -1)
            {
                document.getElementById(msgId).innerHTML = msg;
                this.className = "error";
            }
            else 
            {
                document.getElementById(msgId).innerHTML = "";
                this.className = "true"
            }
        }

        function validateform() 
        {
            let invalid = false;

            for (let i = 0; i < this.elements.length; ++i) 
            {
                let e = this.elements[i];

                if (e.type == "text" && e.onchange != null)
                {
                    e.onchange();
                    if (e.className == "error") invalid = true;
                }
            }

            if (invalid) 
            {
                alert("Не всі поля повинні бути заповнені правильно");
                return false;
            }
        }
