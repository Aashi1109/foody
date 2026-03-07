import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:lucide_icons/lucide_icons.dart';
import 'package:cached_network_image/cached_network_image.dart';
import '../../theme/theme.dart';
import '../../widgets/header.dart';
import '../../widgets/button.dart';
import '../../widgets/input.dart';

import '../../services/user.dart';
import '../../models/user.dart';

import '../settings.dart';

class ProfileDetailsScreen extends StatefulWidget {
  static const String routePath = '/settings/profile';
  const ProfileDetailsScreen({super.key});

  @override
  State<ProfileDetailsScreen> createState() => _ProfileDetailsScreenState();
}

class _ProfileDetailsScreenState extends State<ProfileDetailsScreen> {
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _bioController = TextEditingController();
  User? _user;
  bool _isLoading = true;
  bool _isSaving = false;

  @override
  void initState() {
    super.initState();
    _loadUser();
  }

  Future<void> _loadUser() async {
    setState(() => _isLoading = true);
    final response = await userService.getCurrentUser();
    if (mounted) {
      setState(() {
        _user = response.data;
        if (_user != null) {
          _nameController.text = _user!.name ?? '';
          _bioController.text = _user!.bio ?? '';
        }
        _isLoading = false;
      });
    }
  }

  Future<void> _saveProfile() async {
    FocusScope.of(context).unfocus();
    if (_user == null) return;

    setState(() => _isSaving = true);
    final response = await userService.updateUser(_user!.id, {
      'name': _nameController.text,
      'bio': _bioController.text,
    });

    if (mounted) {
      setState(() => _isSaving = false);
      if (response.data != null) {
        setState(() {
          _user = response.data;
        });
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Profile updated successfully'),
            backgroundColor: AppColors.primary,
          ),
        );
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(response.error ?? 'Failed to update profile'),
            backgroundColor: Colors.red,
          ),
        );
      }
    }
  }

  @override
  void dispose() {
    _nameController.dispose();
    _bioController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.surface,
      body: Column(
        children: [
          AppHeader(
            title: 'Profile Details',
            onBack: () => context.go(SettingsScreen.routePath),
          ),
          Expanded(
            child: _isLoading
                ? const Center(
                    child: CircularProgressIndicator(color: AppColors.primary),
                  )
                : SingleChildScrollView(
                    padding: const EdgeInsets.all(24),
                    child: Column(
                      children: [
                        const SizedBox(height: 16),
                        Center(
                          child: Column(
                            children: [
                              Stack(
                                alignment: Alignment.bottomRight,
                                children: [
                                  Container(
                                    width: 96,
                                    height: 96,
                                    decoration: BoxDecoration(
                                      shape: BoxShape.circle,
                                      border: Border.all(
                                        color: AppColors.border,
                                        width: 2,
                                      ),
                                    ),
                                    child: ClipOval(
                                      child: _user?.avatarUrl != null
                                          ? CachedNetworkImage(
                                              imageUrl: _user!.avatarUrl!,
                                              fit: BoxFit.cover,
                                            )
                                          : ColorFiltered(
                                              colorFilter:
                                                  const ColorFilter.mode(
                                                    AppColors.mutedForeground,
                                                    BlendMode.saturation,
                                                  ),
                                              child: CachedNetworkImage(
                                                imageUrl:
                                                    'https://picsum.photos/seed/${_user?.id ?? 'default'}/200/200',
                                                fit: BoxFit.cover,
                                              ),
                                            ),
                                    ),
                                  ),
                                  Container(
                                    width: 32,
                                    height: 32,
                                    decoration: BoxDecoration(
                                      color: AppColors.surface,
                                      shape: BoxShape.circle,
                                      border: Border.all(
                                        color: AppColors.border,
                                      ),
                                      boxShadow: [
                                        BoxShadow(
                                          color: AppColors.primary.withValues(
                                            alpha: 0.05,
                                          ),
                                          blurRadius: 4,
                                          offset: const Offset(0, 2),
                                        ),
                                      ],
                                    ),
                                    child: const Icon(
                                      LucideIcons.edit2,
                                      size: 16,
                                      color: AppColors.primary,
                                    ),
                                  ),
                                ],
                              ),
                              const SizedBox(height: 16),
                              const Text(
                                'Tap to change photo',
                                style: TextStyle(
                                  fontSize: 14,
                                  fontWeight: FontWeight.w500,
                                  color: AppColors.mutedForeground,
                                ),
                              ),
                            ],
                          ),
                        ),
                        const SizedBox(height: 40),
                        AppInput(
                          label: 'Display Name',
                          placeholder: 'Enter your full name',
                          controller: _nameController,
                          height: 56,
                          borderRadius: 16,
                        ),
                        const SizedBox(height: 24),
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Padding(
                              padding: EdgeInsets.only(left: 4),
                              child: Text(
                                'BIO',
                                style: TextStyle(
                                  fontSize: 10,
                                  fontWeight: FontWeight.w700,
                                  letterSpacing: 2,
                                  color: AppColors.mutedForeground,
                                ),
                              ),
                            ),
                            const SizedBox(height: 8),
                            Container(
                              height: 132,
                              decoration: BoxDecoration(
                                color: AppColors.surface,
                                borderRadius: BorderRadius.circular(16),
                                border: Border.all(color: AppColors.border),
                              ),
                              padding: const EdgeInsets.all(16),
                              child: TextField(
                                controller: _bioController,
                                maxLines: null,
                                style: const TextStyle(
                                  fontSize: 14,
                                  fontWeight: FontWeight.w500,
                                  color: AppColors.primary,
                                ),
                                decoration: const InputDecoration(
                                  hintText: 'Tell us a bit about yourself...',
                                  border: InputBorder.none,
                                  contentPadding: EdgeInsets.zero,
                                ),
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
          ),
          Padding(
            padding: const EdgeInsets.all(24),
            child: AppButton(
              size: AppButtonSize.xl,
              fullWidth: true,
              label: _isSaving ? 'Updating...' : 'Update Profile',
              onPressed: _isSaving ? null : _saveProfile,
            ),
          ),
        ],
      ),
    );
  }
}
