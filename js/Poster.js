AFRAME.registerComponent("poster",{
    init: function (){
        this.placesContainer = this.el;
        this.createPoster();
    },

    createPosters: function () {
        const thumbNailsRef = [
            {
                id: "captain-aero",
                title: "Captain Aero",
                url: "./assets/thumbnails/captain-aero.jpg",

            },
            {
                id: "outer-space",
                title: "Outer Space",
                url: "./assets/thumbnails/outer-space.jpg",
            },
            {
                id: "spiderman",
                title: "SpiderMan",
                url: "./assets/thumbnails/spiderman.jpg",
            },
            {
                id: "superman",
                title: "SuperMan",
                url: ",/assets/thumbnails/superman.jpg",
            },
            
        ];
        let previousXPosition = -60;

        for (var item of thumbnailsRef){
            const posX = previousXPosition + 26;
            const posY = 10;
            const posZ = -40;
            const position = { x: posX, y: PosY, z: PosZ}
            previousXPosition = posX;

            // Border Element
            const borderEl = this.createBorder( position, item.id);

            // thumbnails Element
            const thumbNails = this.createThumbNail(item);
            borderEl.appendChild(thumbNail);

            //title Text Element 
            const titleEl = this.createTitleEl(position, item);
            borderEl.appendChild(titleEl);

            this.placesContainer.appendChild(borderEl);
        }
    },



    createBorder: function (){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("geometry",{
            primitive: "plane",
            width: 20,
            height: 28
        });

        entityEl.setAttribute("position",{ x: 0 , y:5, z: 0.1});
        entityEl.setAttribute("material",{src: item.url});

    },
    createThumbNail: function (item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "rectangle",
            radius: 10,
        });
        entityEl.setAttribute("material", {src: item.url});

        return entityEl;
    },
    createTitleEl: function( position, item){
        const entityEl = createElement("a-entity");
        entityEl.setAttribute("text", {
            font: "exo2bold",
            align: "center",
            width: 80,
            color: "#e65100",
            value : item.title,
        });
        const elPosition = position;
        elPosition.y = -20;
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);

        return entityEl;
    },
});