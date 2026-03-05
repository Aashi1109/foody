import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:lucide_icons/lucide_icons.dart';
import '../theme/theme.dart';
import '../widgets/button.dart';
import '../widgets/header.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  bool _showPassword = false;
  final TextEditingController _passwordController = TextEditingController();
  final String _email = 'john.doe@example.com';

  @override
  void dispose() {
    _passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final password = _passwordController.text;
    final requirements = [
      {'label': 'At least 8 characters', 'met': password.length >= 8},
      {
        'label': 'One uppercase letter',
        'met': password.contains(RegExp(r'[A-Z]')),
      },
      {'label': 'One number', 'met': password.contains(RegExp(r'[0-9]'))},
      {
        'label': 'One special character',
        'met': password.contains(RegExp(r'[^A-Za-z0-9]')),
      },
    ];

    return Scaffold(
      backgroundColor: AppColors.surface,
      body: Stack(
        children: [
          // Background Gradients (Simulated)
          Positioned(
            top: -100,
            right: -100,
            child: Container(
              width: 300,
              height: 300,
              decoration: BoxDecoration(
                color: AppColors.muted.withValues(alpha: 0.5),
                shape: BoxShape.circle,
              ),
            ),
          ),
          Positioned(
            bottom: -80,
            left: -80,
            child: Container(
              width: 250,
              height: 250,
              decoration: BoxDecoration(
                color: AppColors.muted.withValues(alpha: 0.4),
                shape: BoxShape.circle,
              ),
            ),
          ),

          SafeArea(
            child: Column(
              children: [
                AppHeader(
                  onBack: () => context.go('/auth'),
                  title: '',
                  showBorder: false,
                  backgroundColor: AppColors.transparent,
                ),
                Expanded(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.symmetric(horizontal: 24),
                    child: Column(
                      children: [
                        const SizedBox(height: 32),
                        const Text(
                          'Welcome back',
                          style: TextStyle(
                            fontSize: 32,
                            fontWeight: FontWeight.w800,
                            letterSpacing: -1,
                            color: AppColors.primary,
                          ),
                        ),
                        const SizedBox(height: 8),
                        const Text(
                          'Enter your password to continue',
                          style: TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.w500,
                            color: AppColors.mutedForeground,
                          ),
                        ),
                        const SizedBox(height: 40),

                        // User Badge
                        Center(
                          child: Container(
                            padding: const EdgeInsets.fromLTRB(12, 8, 16, 8),
                            decoration: BoxDecoration(
                              color: AppColors.surface,
                              borderRadius: BorderRadius.circular(50),
                              border: Border.all(color: AppColors.border),
                              boxShadow: [
                                BoxShadow(
                                  color: Colors.black.withValues(alpha: 0.05),
                                  blurRadius: 10,
                                  offset: const Offset(0, 4),
                                ),
                              ],
                            ),
                            child: Row(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Container(
                                  width: 32,
                                  height: 32,
                                  decoration: const BoxDecoration(
                                    color: AppColors.primary,
                                    shape: BoxShape.circle,
                                  ),
                                  child: const Center(
                                    child: Text(
                                      'JD',
                                      style: TextStyle(
                                        color: AppColors.surface,
                                        fontSize: 10,
                                        fontWeight: FontWeight.w900,
                                      ),
                                    ),
                                  ),
                                ),
                                const SizedBox(width: 12),
                                Text(
                                  _email,
                                  style: const TextStyle(
                                    fontSize: 14,
                                    fontWeight: FontWeight.w700,
                                    color: AppColors.primary,
                                  ),
                                ),
                                const SizedBox(width: 8),
                                const Icon(
                                  LucideIcons.checkCircle2,
                                  size: 16,
                                  color: AppColors.accent,
                                ),
                              ],
                            ),
                          ),
                        ),
                        const SizedBox(height: 40),

                        // Password Input
                        Container(
                          height: 64,
                          decoration: BoxDecoration(
                            color: AppColors.muted,
                            borderRadius: BorderRadius.circular(16),
                          ),
                          child: TextField(
                            controller: _passwordController,
                            obscureText: !_showPassword,
                            onChanged: (_) => setState(() {}),
                            style: const TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.w500,
                              color: AppColors.primary,
                            ),
                            decoration: InputDecoration(
                              hintText: 'Password',
                              hintStyle: const TextStyle(
                                color: AppColors.mutedForeground,
                                fontSize: 16,
                                fontWeight: FontWeight.normal,
                              ),
                              border: InputBorder.none,
                              contentPadding: const EdgeInsets.symmetric(
                                horizontal: 16,
                                vertical: 20,
                              ),
                              suffixIcon: IconButton(
                                icon: Icon(
                                  _showPassword
                                      ? LucideIcons.eyeOff
                                      : LucideIcons.eye,
                                  color: AppColors.mutedForeground,
                                  size: 20,
                                ),
                                onPressed: () => setState(
                                  () => _showPassword = !_showPassword,
                                ),
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(height: 24),

                        // Validation Rows
                        Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 8),
                          child: Column(
                            children: requirements.map((req) {
                              final met = req['met'] as bool;
                              return Padding(
                                padding: const EdgeInsets.only(bottom: 12),
                                child: Row(
                                  children: [
                                    Icon(
                                      met ? LucideIcons.check : LucideIcons.x,
                                      size: 16,
                                      color: met
                                          ? AppColors.primary
                                          : AppColors.mutedForeground,
                                    ),
                                    const SizedBox(width: 12),
                                    Text(
                                      req['label'] as String,
                                      style: TextStyle(
                                        fontSize: 14,
                                        fontWeight: FontWeight.w500,
                                        color: met
                                            ? AppColors.primary
                                            : AppColors.mutedForeground,
                                      ),
                                    ),
                                  ],
                                ),
                              );
                            }).toList(),
                          ),
                        ),
                        const SizedBox(height: 32),

                        AppButton(
                          size: AppButtonSize.lg,
                          fullWidth: true,
                          label: 'Log In',
                          iconRight: const Icon(LucideIcons.arrowRight),
                          onPressed: () => context.go('/preferences'),
                        ),
                        const SizedBox(height: 16),
                        TextButton(
                          onPressed: () {},
                          child: const Text(
                            'FORGOT PASSWORD?',
                            style: TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.w800,
                              letterSpacing: 1.5,
                              color: AppColors.mutedForeground,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                const Padding(
                  padding: EdgeInsets.fromLTRB(40, 0, 40, 24),
                  child: Text(
                    'Protected by reCAPTCHA and subject to the Privacy Policy and Terms of Service.',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 10,
                      fontWeight: FontWeight.w500,
                      color: AppColors.mutedForeground,
                      height: 1.5,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
