import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:lucide_icons/lucide_icons.dart';
import '../theme/theme.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    Future.delayed(const Duration(seconds: 2), () {
      if (mounted) context.go('/onboarding');
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.primary,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(LucideIcons.pizza, size: 80, color: AppColors.surface),
            SizedBox(height: 24),
            Text(
              'foody',
              style: TextStyle(
                fontFamily: 'Playfair Display',
                fontSize: 48,
                fontWeight: FontWeight.w900,
                color: AppColors.surface,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
