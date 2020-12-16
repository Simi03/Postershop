public class Products {
    private int id;
    private String title,
    private byte[] picture;
    private String description;
    public Products(int id, String title, byte[] picture, String description){
        this.id=id;
        this.title=title;
        this.picture=picture;
        this.description=description;
    }
    public int getId(){return id;}
    public String getTitle(){return title;}
    public []byte getPicture(){return picture;}
    public String description(){return description;}
    

}