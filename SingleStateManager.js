// Author Sumit| Sam

    let Manager = (()=>{
        let instance = null;
        function Handler(){
            var store = {};
            var extra_storages = [];//possible keys = LOCALSTORAGE
            var store_created = false;
            var action_keys = [];

            this.createState = (required_keys_list,extra_storages)=>{
                console.log("in create strore");
                console.log("action keys : ",action_keys);
            }

            this.getState = (key)=>{
                console.log("in get State");
                if(key == undefined || key == null){
                    return store.key;
                }
            }

            this.getCompleteState = ()=>{
                console.log("getting complete state ...");
                return store;
            }

            this.setState = (action_key)=>{
                console.log("in set state");
                if(action_keys.indexOf(action_key)!=-1){
                    console.log("Legal Action performing :",action_key);
                }
                else{
                    throw "Illegal action . Pass a legal action_key to perform this operation."
                }
            }

            // function used when storing data to extra storages
            dumpState = ()=> {
                console.log("in dump state");
                if(extra_storages.indexOf("LOCALSTORAGE")!=-1){
                    console.log("dump data in local storage ..");
                    window.localStorage.setItem("state",JSON.stringify(store));
                }
                
            }

            loadState = ()=>{
                console.log("loading store into state ...");
            }
        }

        return {
            getInstance: (data)=>{
                if(instance == null){
                    instance = new Handler(data);
                    return instance;
                }
                else{
                    return instance;
                }
            }
        }
    })();

// 7ee61411406325d94b51b9a51a1ca5edc32af733
