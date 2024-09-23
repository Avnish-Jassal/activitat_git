import javax.swing.JFrame;

public class MainWindow extends JFrame {
    public MainWindow() {
        setTitle("Finestra Principal");
        setSize(400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
    }

    public static void main(String[] args) {
        MainWindow window = new MainWindow();
        window.setVisible(true);
    }
}
