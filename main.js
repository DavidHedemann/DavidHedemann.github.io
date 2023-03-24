function add_post(container, div_class, div_id) {
    var div_to_insert ;
    var container_block ;
     
    div_to_insert = document.createElement( 'div' );
    
    div_to_insert.id = div_id ;
    block_to_insert.className = div_class ;

    container_block = document.getElementById( container );
    container_block.appendChild( block_to_insert ); 
}