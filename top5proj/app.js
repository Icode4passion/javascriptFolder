new Vue({
    el:"#main",
    data:{
        searchString:"",
        employee:[
            {
                'name'      :   "Mahesh",
                'id'        :   "2001",
                'company'   :   "Wipro"
            },
            {
                'name'      :   "Ramesh",
                'id'        :   "2002",
                'company'   :   "Wipro"
            },
            {
                'name'      :   "Shakti",
                'id'        :   "2003",
                'company'   :   "Cisco"
            },
            {
                'name'      :   "Mangesh",
                'id'        :   "2004",
                'company'   :   "IBM"
            },
            {
                'name'      :   "Veera",
                'id'        :   "2005",
                'company'   :   "Alas"
            },
            {
                'name'      :   "Mahaveer",
                'id'        :   "2006",
                'company'   :   "Delloite"
            },
            {
                'name'      :   "Hohn",
                'id'        :   "2007",
                'company'   :   "Sigma"
            }
        ]
    },

    computed:{
        filteredEmployee: function(){
            var employee_array = this.employee;
            searchString = this.searchString;

            if(!searchString){
                return employee_array;
            }
            searchString = searchString.trim().toLowerCase();

            employee_array = employee_array.filter(function(item){
                if(item.name.toLowerCase().indexOf(searchString)!== -1){
                    return item;
                }
            })
            return employee_array;
        }
    }
})
