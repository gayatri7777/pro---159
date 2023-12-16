AFRAME.registerComponent("cursor-listener",{
    schema: {
        selectedItemId: { default: "", type: "string"},

    },
    init: function (){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },
    handleMouseClickEvents: function (){
        // curson 'click' Events
        this.el.addEventListener("click", evt => {
            const postersContainer = document.querySelector("#poster-container");
            const {  selectedItemId} =  this.data;
            //check the seleted item to set the "info banner" component on the plane
            if (selectedItemId){
                fade.BackgroundEl.setAttribute("visible", true);
                fade.BackgroundEl.setAttribute("info-banner",{
                    itemId: selectedItemId,
                });
                titleEl.setAttribute("visible",false);
                cursorEl.setAttribute("position",{x: 0, y:0, z: -1});
                cursorEl.setAttribute("geometry",{
                    radiusInner: 0.03,
                    radiusOutter: 0.04,
                });
            } else {
                //else make the plane invisible
                fadeBackgroundEl.setAttribute("visible", false);
                titleEl.setAttribute("visible", true);
                cursorEl.setAttribute("position", { x: 0, y: 0, z: -3});
                cursorEl.setAttribute("geometry", {
                    radiusInner: 0.08,
                    radiusOutter: 0.12,
                });
            }


            

        });

    },

    update: function (){
        const fadeBackgroundEl = document.querySelector("#fadeBackground");

        // check if the infoBanner plane already has comic text info child entity
        // if so remove the child to avoid the overlapping of the text
        c = fadeBackgroundEl.children;
        if ( c.length > 0){
            var i;
            for (i = 0; i <= c.length; i++){
                fadeBackgroundEl.removeChild(c[i]);
            }

        } else {
            this.handleMouseClickEvents();
        }

    },

     
    handleMouseEnterEvents: function (){
        //cursor 'mouseleave' Events
        this.el.addEventListener("mouseenter", () => {
            const id = this.el.getAttribute("id");
            const postersId = [
                "superman",
                "spiderman",
                "captain-aero",
                "outer-space",
            ];
            if (postersId.includes(id)){
                const postersContainer = document.querySelector("#posters-container");
                postersContainer.setAttribute("cursor-listener", {
                    selectedItemId: id,
                });
                this.el.setAttribute("material", { color: "#1565c0"});
                
            }

                
        });
    },
    handleMouseLeaveEvents: function (){
        //cursor 'mouseleave' Events
        this.el.addEventListener("mouseleave", () => {
            const { selectedItemId } = this.data;
            if (selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
                if (id == selectedItemId){
                    el.setAttribute("material", {
                        color: "#0077CC",
                        opacity: 1,
                    });
                }
            }
        });
    },
});