import 'package:flutter/material.dart';
import '../theme/theme.dart';

class AppInput extends StatelessWidget {
  final String? label;
  final String? placeholder;
  final String? error;
  final Widget? icon;
  final Widget? rightElement;
  final TextEditingController? controller;
  final ValueChanged<String>? onChanged;
  final bool obscureText;
  final TextInputType? keyboardType;
  final double height;
  final double borderRadius;
  final Color? backgroundColor;
  final bool hasBorder;

  const AppInput({
    super.key,
    this.label,
    this.placeholder,
    this.error,
    this.icon,
    this.rightElement,
    this.controller,
    this.onChanged,
    this.obscureText = false,
    this.keyboardType,
    this.height = 56,
    this.borderRadius = 16,
    this.backgroundColor,
    this.hasBorder = true,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisSize: MainAxisSize.min,
      children: [
        if (label != null) ...[
          Padding(
            padding: const EdgeInsets.only(left: 4),
            child: Text(
              label!.toUpperCase(),
              style: const TextStyle(
                fontSize: 10,
                fontWeight: FontWeight.w700,
                letterSpacing: 2,
                color: AppColors.mutedForeground,
              ),
            ),
          ),
          const SizedBox(height: 8),
        ],
        Container(
          height: height,
          decoration: BoxDecoration(
            color: backgroundColor ?? AppColors.surface,
            borderRadius: BorderRadius.circular(borderRadius),
            border: hasBorder
                ? Border.all(
                    color: error != null ? Colors.red : AppColors.border,
                  )
                : null,
          ),
          child: Row(
            children: [
              if (icon != null) ...[
                const SizedBox(width: 16),
                IconTheme(
                  data: const IconThemeData(
                    color: AppColors.mutedForeground,
                    size: 20,
                  ),
                  child: icon!,
                ),
              ],
              Expanded(
                child: TextField(
                  controller: controller,
                  onChanged: onChanged,
                  obscureText: obscureText,
                  keyboardType: keyboardType,
                  style: const TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w500,
                    color: AppColors.primary,
                  ),
                  decoration: InputDecoration(
                    hintText: placeholder,
                    hintStyle: TextStyle(
                      fontSize: 14,
                      fontWeight: FontWeight.w500,
                      color: AppColors.mutedForeground.withValues(alpha: 0.5),
                    ),
                    border: InputBorder.none,
                    contentPadding: EdgeInsets.symmetric(
                      horizontal: icon != null ? 12 : 20,
                    ),
                  ),
                ),
              ),
              if (rightElement != null) ...[
                rightElement!,
                const SizedBox(width: 16),
              ],
            ],
          ),
        ),
        if (error != null) ...[
          const SizedBox(height: 4),
          Padding(
            padding: const EdgeInsets.only(left: 4),
            child: Text(
              error!.toUpperCase(),
              style: const TextStyle(
                fontSize: 10,
                fontWeight: FontWeight.w700,
                letterSpacing: 2,
                color: Colors.red,
              ),
            ),
          ),
        ],
      ],
    );
  }
}
