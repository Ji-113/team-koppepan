getWindow().setFlags(LayoutParams.FLAG_SECURE, LayoutParams.FLAG_SECURE); 

func makeSecure(window: UIWindow) {
        let field = UITextField()

        let view = UIView(frame: CGRect(x: 0, y: 0, width: field.frame.self.width, height: field.frame.self.height))

        let image = UIImageView(image: UIImage(named: "whiteImage"))
        image.frame = CGRect(x: 0, y: 0, width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)

        field.isSecureTextEntry = true

        window.addSubview(field)
        view.addSubview(image)

        window.layer.superlayer?.addSublayer(field.layer)
        field.layer.sublayers?.last!.addSublayer(window.layer)

        field.leftView = view
        field.leftViewMode = .always
    }
