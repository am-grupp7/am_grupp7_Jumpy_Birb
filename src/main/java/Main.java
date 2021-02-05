import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.SwingConstants;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;

public class Main {
	public static void main(String[] args) {

		JFrame main = new JFrame("Hello");
		main.setMinimumSize(new Dimension(400, 400));
		main.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		JLabel myLabel = new JLabel("Hello world!", SwingConstants.CENTER);
		myLabel.setFont(new Font("Arial", Font.BOLD, 25));
		myLabel.setBackground(Color.gray);

		main.getContentPane().add(myLabel);
		main.setVisible(true);

	}
}
